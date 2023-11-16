import {
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    Timestamp,
    orderBy,
    setDoc,
    doc,
    getDoc,
    updateDoc,
    getDocs,
    deleteDoc,
    limit,
    startAfter,
    endBefore,
    startAt,
    limitToLast
} from 'firebase/firestore'

import {
    ref,
    getDownloadURL,
    uploadBytes,
    deleteObject
} from "firebase/storage";

import {
    auth,
    db,
    storage
} from "../firebase"

let url;

export const storeImage = async (img) => {
    console.log("img is : " , img);
    return new Promise(async (resolve, reject) => {
        const imgRef = ref(
            storage,
            `images/${new Date().getTime()} - ${img.name}`
        );
        const snap = await uploadBytes(imgRef, img);
        const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
        url = dlUrl;
        resolve(url)
    })
}
 