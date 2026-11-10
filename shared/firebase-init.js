// Configuración de conexión con Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDo8uiFa7vjZWD1cupjRW4IXnuuPCgJMvQ",
  authDomain: "trupal-registro-de-unidades.firebaseapp.com",
  projectId: "trupal-registro-de-unidades",
  storageBucket: "trupal-registro-de-unidades.firebasestorage.app",
  messagingSenderId: "1008307377107",
  appId: "1:1008307377107:web:c82f0c81edabf9f5149526"
};

// Inicialización global de Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();
