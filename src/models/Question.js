
import { doc, getDoc, collection } from 'firebase/firestore';
import db from '../config/firebaseConfig';
import { query } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

class QuestionModel {

     search_id;

    constructor(search_id) {
        this.search_id = search_id;
    }


    async getUser(){
        let q = doc(db, "users", this.search_id);
        const docQuery = await getDoc(q);
        return  docQuery.data();
    
    }

    async getQuestion() {
        let q = doc(db, "questions", this.search_id);
        const docQuery = await getDoc(q);
        return  {...docQuery.data(), ref  : docQuery.ref}
    }

    async getQuestionsWithCategories() {
        const q = query(collection(db, "questions"));
        let querySnapshot = await getDocs(q);
        let quizArray = [];
        let querySnapshotArray = querySnapshot.docs;
        let cat;
        for (let i = 0; i < querySnapshotArray.length; i++) {
            let catdocs = [];
            for (let j = 0;j < querySnapshotArray[i].data().categories.length;j++) {
                cat = await getDoc(querySnapshotArray[i].data().categories[j]);
                catdocs.push({ ...cat.data(), id: cat.id });
            }
            quizArray.push({
            ...querySnapshotArray[i].data(),
            id: querySnapshotArray[i].id,
            categories: catdocs,
            });
        }
        return quizArray;
    }

    async getCategories() {

    }
}

export default QuestionModel;