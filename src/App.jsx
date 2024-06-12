import { useEffect, useState } from "react"
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = '/api/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () =>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }catch(err){
      setLoading(false);
      console.log(err);
    }
  }
  
  const removeTour = (id)=>{
    setTours(tours.filter((tour)=> (tour.id !== id)))
  }
  // const fetchTours = ()=>{
  //   axios.get("/api/react-tours-project").then((tours)=>{
  //     setTours(tours.data);
  //     console.log(tours.data);
  //   }).catch((err)=>console.log(err));
  // };
  useEffect(()=>{
    fetchTours();
  }, [])
  if(loading){
    return <> <Loading/> </>
  }
  if(tours.length === 0){
    return (
      <>
        <div className="w-full h-screen bg-zinc-200 space-y-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">No Tours Left!!</h1>
        <button onClick={()=>(fetchTours())} className="bg-blue-200 px-4 py-1 rounded-md"> Refresh Me </button>
      </div>
      </>
    )
  }
  return (
    <>
      <div className="w-full h-full bg-zinc-200 flex flex-col items-center">
        <Tours tour={tours} handleClick={removeTour}/>
      </div>
    </>
  )
}

export default App
