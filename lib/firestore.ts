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

export async function getGalleryPhotos() {
    const q = query(
        collection(db, "galeria"),
        orderBy("date", "desc"));
    const results = await getDocs(q);
    return results.docs.map(doc => {
        const data = doc.data();
        const cols = Math.floor(Math.random() * 2 + 1);
        const rows = cols;
        return {
            img: data.url,
            title: data.uid,
            cols: cols,
            rows: rows,
        }
    });
}

export async function getSoyLCCVideos() {
    const q = query(
        collection(db, "videos"),
        orderBy("date", "desc"));

    const results = await getDocs(q);
    return results.docs.map(doc => {
        const data = doc.data();
        const date = data.date.toDate().toString();
        return {
            image: data.img,
            imageLabel: data.titulo,
            title: data.titulo,
            date: date,
            url: data.url,
        }
    });
}


