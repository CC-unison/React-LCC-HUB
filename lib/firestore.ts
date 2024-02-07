import {
    collection,
    onSnapshot,
    query,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    orderBy,
    Timestamp,
    runTransaction,
    where,
    addDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getNoticias() {
    const q = query(
        collection(db, "anuncios"),
        orderBy("date", "desc"));
    const results = await getDocs(q);
    return results.docs.map(doc => {
        const data = doc.data();
        const date = data.date.toDate().toString();
        return {
            title: data.titulo,
            date: date,
            description: data.desc,
            image: data.imgSrc,
            imageLabel: data.titulo,
        };
    });
}


