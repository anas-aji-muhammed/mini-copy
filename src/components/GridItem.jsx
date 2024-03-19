import React from 'react'
import PropTypes from 'prop-types'; 

function GridItem({data}) {
    const copyToClipboard = () => {
        console.log("mainDataContent", data.content);
        navigator.clipboard.writeText(data.content) // Use the Clipboard API to copy the text
          .then(() => alert("Copied to clipboard!")) // Optional: Show a confirmation to the user
          .catch(err => console.error("Failed to copy text: ", err)); // Optional: Log an error if the copy fails
      };
  return (
    <div className='flex flex-col justify-between items-center pl-4 pr-4 pt-4 pb-4 rounded-lg bg-white gap-12'>
        <p className='place-self-start text-grey-text'>{data.type}</p>
        <div className='pl-20 pr-20 pt-6 pb-6'>
            <h1 className='text-xl font-bold' id='mainDataContent'>{data.content}</h1>
            <h3 onClick={copyToClipboard} className='text-grey-text cursor-pointer'>Click to copy</h3>
        </div>
        <p className='place-self-end text-grey-text'>{data.company}</p>

    </div>
  )
}

GridItem.propTypes = {
    data: PropTypes.shape({
      content: PropTypes.string.isRequired,
      type: PropTypes.string,
      company: PropTypes.string,
    }).isRequired,
  };

export default GridItem