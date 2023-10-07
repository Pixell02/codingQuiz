import {
  CollectionReference,
  DocumentData,
  Query,
  QuerySnapshot,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import { db } from "../../../../firebase/config";
import useSelectedValueContext from "../../../../hooks/useSelectedValueContext";

const useCollection = () => {
  const [documents, setDocuments] = useState<DocumentData[]>([]);
  const { selectedValues } = useSelectedValueContext();
  useEffect(() => {
    const fetchData = async () => {
      const ref: CollectionReference | Query = query(
        collection(db, "questions"),
        where("language", "==", selectedValues.language),
        where("level", "==", selectedValues.level)
      );

      const unsub = onSnapshot(ref, (snapshot: QuerySnapshot<DocumentData>) => {
        const results: DocumentData[] = [];

        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id } as DocumentData);
        });

        setDocuments(results);
      });

      return () => unsub();
    };

    fetchData();
  }, [selectedValues]);

  return { documents };
};

export default useCollection;
