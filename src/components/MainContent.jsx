import React, {useState, useEffect} from 'react'
import CategoryContainer from './Footer'
import GridItem from './GridItem'
import SearchBar from './SearchBar'
import dataList from '../assets/data'


function MainContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredData = dataList.filter(item => {
    return item.content.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategory ? item.type === selectedCategory : true);
  });

  const handleSearchChange = (text) => {
    setSearchTerm(text);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // useEffect(()=>{

  // })
  
  return (
    <div className='flex flex-col justify-start items-center w-full px-5 lg:px-8 xl:px-80 gap-3 pb-2'>
      <SearchBar onSearchChange={handleSearchChange} />
      <div className="flex flex-row w-full gap-3 justify-start place-self-start">
        {['', 'Headline', 'Slogan', 'Account', 'Error'].map((category) => (
          <button 
            key={category} 
            onClick={() => handleCategoryChange(category)} 
            className={`text-base lg:text-lg font-semibold ${selectedCategory === category ? 'font-bold border-b-2 border-blue-500' : 'text-black'}`}
          >
            {category === '' ? 'All' : category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
        {filteredData.map((item, index)=>{
          return (<GridItem key={index} data={item}/>);
        }
        )}
      </div>
      
    </div>
  )
}

export default MainContent