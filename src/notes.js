// destructuring objects
function App({authorized}) {
    return (
        <>
         {authorized ? (
             <SecretComponent />
         ) : (
             <RegularComponent />
         )}
        </>
    );
}

export default App;

// destructuring arrays
const [,, light] = ["boots", "tent", "hat"];
console.log(light);

