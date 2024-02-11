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

export async function getStudentById(id: string) {
    const docRef = doc(db, "students", id);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data() }
}

export async function getSemesterMap(key: string) {
    const docRef = doc(db, "curriculumMaps", key);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data() };
}

export async function generateSemesterMapDict(program: string[][]) {
    const programDict = {}
    const flattenProgram = new Set([].concat(...program));
    const docSnap = await getDocs(collection(db, "subjects"));
    docSnap.forEach((doc) => {
        if (flattenProgram.has(doc.id)) {
            programDict[doc.id] = {
                "branch": doc.data().branch,
                "credits": doc.data().credits,
                "subjectName": doc.data().subjectName,
                "tracklist": doc.data().tracklistSubject
            }
        }
    });
    return programDict;
}
