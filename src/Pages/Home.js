// import { Container } from '@mui/material';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useDispatch } from 'react-redux';
// import MenuData from '../components/MenuData';
// import { ADD } from '../redux/actions/Actions';

// function Home() {
//   const [data, setData] = useState(MenuData);

//   const dispatch = useDispatch();

//   const send = (e) => {
//     console.log(e);
//     dispatch(ADD(e));
//   };


//   const sortByPriceAscending = () => {
//     const sortedData = [...data].sort((a, b) => a.price - b.price);
//     setData(sortedData);
//   };

//   return (
//     <div className='mt-3'>
//       <h2 className='text-center'>Our Popular Dishes</h2>

//       {/* Sort button */}
//       <div className='text-center mb-3'>
//         <Button variant="outline-primary" onClick={sortByPriceAscending}>
//           Sort by Price

//         </Button>
//       </div>

//       <Container>
//         <div className='row d-flex justify-content-center align-items-center'>
//           {
//             data.map((element, id) => {
//               return (
//                 <Card style={{ width: '18rem' }} key={id} className='mx-2 mt-4 card_style'>
//                   <Card.Img variant="top" src={element.imgdata} style={{ "height": "16rem" }} className='mt-3' />
//                   <Card.Body>
//                     <Card.Title>{element.name}</Card.Title>
//                     <Card.Text>
//                       Price: Rs.{element.price}
//                     </Card.Text>

//                     <div className='button div d-flex justify-content-center'>
//                       <Button onClick={() => send(element)} variant="primary">Add to cart</Button>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               );
//             })
//           }
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Home;
import { Autocomplete, Container, TextField } from '@mui/material';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import MenuData from '../components/MenuData';
import { ADD } from '../redux/actions/Actions';
function Home() {
  const [data, setData] = useState(MenuData);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };

  const sortByPriceAscending = () => {
    const sortedData = [...data].sort((a, b) => a.price - b.price);
    setData(sortedData);
  };

  const restaurantNames = MenuData.map(item => item.rname);

  const handleRestaurantSelect = (event, value) => {
    if (value) {
      const filteredData = MenuData.filter(item => item.rname === value);
      setData(filteredData);
    } else {
      setData(MenuData); // Reset to default data if no selection
    }
    setSelectedRestaurant(value);
  };

  return (
    <div className='mt-3'>
      <h2 className='text-center'><i>OUR POPULAR DISHES</i></h2>

      {/* Sort button */}
      <div style={{display:"flex",flexDirection:"row",gap:"20px",justifyContent:"center"}}>
        <div className='text-center mb-3'>
          <Button variant="outline-primary" onClick={sortByPriceAscending}>
            Sort by Price
          </Button>
        </div>
        <Autocomplete
          id="combo-box-demo"
          options={restaurantNames}
          value={selectedRestaurant}
          onChange={handleRestaurantSelect}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                style: {
                  border: '1px solid transparent',
                  borderRadius: '4px',
                  color: 'white',
                  backgroundColor: 'transparent',
                  padding: '5px 10px',
                  marginRight: '10px',
                },
                classes: {
                  notchedOutline: 'customOutline',
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white',
                },
              }}
            />
          )}
        />
      </div>



      <Container>
        <div className='row d-flex justify-content-center align-items-center'>
          {
            data.map((element, id) => {
              return (
                <Card style={{ width: '18rem' }} key={id} className='mx-2 mt-4 card_style'>
                  <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className='mt-3' />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                      <b>{element.rname}</b>
                    </Card.Text>
                    <Card.Text>
                      Price: Rs.{element.price}
                    </Card.Text>
                    <div className='button div d-flex justify-content-center'>
                      <Button onClick={() => send(element)} variant="primary">Add to cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })
          }
        </div>
      </Container>
    </div>
  );
}

export default Home;

