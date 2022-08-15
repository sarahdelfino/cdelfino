import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { db } from './firebase';

function SubmissionManager() {
    const [submission, setSubmission] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'submission'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setSubmission(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}
