import React, {useState, useEffect, Fragment} from 'react'
import Dropdowm from './Dropdown'
import axios from 'axios'
import Card from './Card'
import shortid from 'shortid'

const Form = () => {

  const [breeds, setBreeds] = useState({});
  const [breed, setBreed] = useState('');
  const [imageList, setImageList] = useState([]);


  useEffect(() => {
    const getBreeds = async () => {
      const url = 'https://dog.ceo/api/breeds/list/all';
      const result = await axios.get(url);
      setBreeds(result.data.message);
    }
    getBreeds();

  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    if(breed === '') return

    const getImageList = async () => {
      const url = `https://dog.ceo/api/breed/${breed}/images`;
      const result = await axios.get(url);
      setImageList(result.data.message);


    }

    getImageList();
  }



  return (
    <Fragment>

      <div className="flex flex-col max-w-4xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-10  m-auto">

          <div className="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
              <div className="py-6 px-8 md:py-0">
                  <h2 className="text-gray-700 text-2xl font-bold md:text-gray-100 text-center">Search Dogs</h2>
                  <p className="mt-2 text-gray-600 md:text-gray-400 text-center">Selecciona la raza de tu perro a buscar</p>
              </div>
          </div>
          <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
              <form
                onSubmit={handleSubmit}
              >
                  <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">

                      <Dropdowm
                        breeds={breeds}
                        setBreed={setBreed}
                        breed={breed}
                      />

                      <input
                        className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600 ml-4 rounded-md cursor-pointer"
                        type="submit"
                        value="Buscar"
                      />
                  </div>
              </form>
          </div>
      </div>

      <div className="w-full gap-4 grid grid-cols-1 md:p-20 sm:grid-cols-2 lg:grid-cols-4 p-4">

        { imageList.map(image => (
          <Card
            image={image}
            key={shortid.generate()}
            breed={breed}
          />
        ))}

      </div>
    </Fragment>

  )
}

export default Form
