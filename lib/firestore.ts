import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getSoyLCCvideos() {
  const q = query(collection(db, "videos"), orderBy("date", "desc"));
  const results = await getDocs(q);
  return results.docs.map((doc) => {
    const data = doc.data();
    const date = data.date.toDate().toString();
    return {
      image: data.img,
      imageLabel: data.titulo,
      title: data.titulo,
      date: date,
      url: data.url,
    };
  });
}

export async function getNoticias() {
  const q = query(collection(db, "anuncios"), orderBy("date", "desc"));
  const results = await getDocs(q);
  return results.docs.map((doc) => {
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
  const q = query(collection(db, "galeria"), orderBy("date", "desc"));
  const results = await getDocs(q);
  return results.docs.map((doc) => {
    const data = doc.data();
    const cols = 1;
    const rows = cols;
    return {
      img: data.url,
      title: data.uid,
      cols: cols,
      rows: rows,
    };
  });
}

export async function getStudentById(id: string) {
  const docRef = doc(db, "students", id);
  const docSnap = await getDoc(docRef);
  return { ...docSnap.data() };
}

export async function getSemesterMap(key: string) {
  const docRef = doc(db, "curriculumMaps", key);
  const docSnap = await getDoc(docRef);
  return { ...docSnap.data() };
}

export async function generateSemesterMapDict(program: string[][]) {
  const programDict = {};
  const flattenProgram = new Set([].concat(...program));
  const docSnap = await getDocs(collection(db, "subjects"));
  docSnap.forEach((doc) => {
    if (flattenProgram.has(doc.id)) {
      programDict[doc.id] = {
        branch: doc.data().branch,
        credits: doc.data().credits,
        subjectName: doc.data().subjectName,
        tracklist: doc.data().tracklistSubject,
      };
    }
  });
  return programDict;
}

export async function getNotifications() {
  const docSnap = await getDocs(collection(db, "alertas"));
  return docSnap.docs.map((doc) => {
    return { ...doc.data() };
  });
}
