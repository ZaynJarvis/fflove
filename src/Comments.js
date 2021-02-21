import React from "react";
import { useForm } from "react-hook-form";
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAgJVnYLzTfBQBpF2EDYx4m_k_j0PNpDx4",
  authDomain: "fflove-4ed8d.firebaseapp.com",
  projectId: "fflove-4ed8d",
});
const db = firebaseApp.firestore();

function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    db.collection("comment").add({ ...data, time: Date.now() })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    getFromStore()
    reset({})
  }

  const getFromStore = () => {
    db.collection("comment").limit(10).orderBy("time", "asc").get().then((querySnapshot) => {
      let cs = []
      querySnapshot.forEach((doc) => {
        if (doc.data().name && doc.data().comment) {
          cs = [...cs, { ...doc.data(), id: doc.id, time: Date.now() }]
        }
        loadComments(cs)
      });
    });
  }
  const [comments, loadComments] = React.useState([])
  React.useEffect(() => {
    getFromStore();
  }, [])

  return (
    <>
      <article>
        <h2 style={{ textAlign: 'center' }}>粉丝留言</h2>
        {comments.map(a => (
          <div key={a.id} className='comment'>
            <p><span>{a.name}: </span>{a.comment}</p>
          </div>)
        )}
      </article>
      <article>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name='name' ref={register} type='text' placeholder='你的网名' style={{ display: 'block' }} />
          <textarea name='comment' ref={register} rows='5' placeholder='说点什么吧！'></textarea>
          <input type='submit' />
        </form>
      </article>
    </>
  );
}

export default App;
