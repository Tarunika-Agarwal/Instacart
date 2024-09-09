// import { Paper } from '@mui/material';
// import React from 'react';
// import Carousel from 'react-material-ui-carousel';
// import { Link } from 'react-router-dom';

// function Homepage() {
//   const items = [
//     {
//       link: "/home",
//       image: 'https://tse4.mm.bing.net/th?id=OIP.PLjnNovYCF-NV6sCopGNegHaEK&pid=Api&P=0&h=180'
//     },
//     {
//       link: "/pizzas",
//       image: 'https://tse3.mm.bing.net/th?id=OIP.55CrxkF26WOuOmumnDZ1qwHaE8&pid=Api&P=0&h=180'
//     },
//     {
//       link: "/snacks",
//       image: 'https://tse2.mm.bing.net/th?id=OIP.1Jokzy72XzQcRm9yjLdFYQHaD2&pid=Api&P=0&h=180'
//     }
//   ];

//   return (
//     <div className="homepage-container">
//       <div className="text-section">


//         <h4 style={{marginTop:"40px", marginLeft:"13px"}}><i>CHASE THE NEW FLAVOUR</i></h4>
//         <h1 style={{marginLeft:"13px"}}>THE KEY TO FINE DINING</h1>
//         <p style={{marginLeft:"13px"}}>
//           <i>
//           "Discover a world of flavors at your fingertips! Our app brings you the finest selection of meals, from classic comfort foods to gourmet delights. Whether you're craving a quick snack or planning a feast, we've got something to satisfy every palate. Explore, indulge, and let your taste buds embark on a culinary adventure!"
//           </i>
//         </p>
        
//       </div>
//       <div className="image-section">
//         <Carousel>
//           {items.map((item, i) => (
//             <Paper key={i}>
//               <Link to={item.link}>
//                 <img src={item.image} alt='' style={{height: "200px" }} />
//               </Link>
//             </Paper>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default Homepage;


import { Paper } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';

function Homepage() {
  const items = [
    {
      link: "/home",
      image: 'https://tse4.mm.bing.net/th?id=OIP.PLjnNovYCF-NV6sCopGNegHaEK&pid=Api&P=0&h=180'
    },
    {
      link: "/pizzas",
      image: 'https://tse4.mm.bing.net/th?id=OIP.qJqyKQfURd9QjA8eFPwPlQHaD4&pid=Api&P=0&h=180'
    },
    {
      link: "/snacks",
      image: 'https://tse2.mm.bing.net/th?id=OIP.1Jokzy72XzQcRm9yjLdFYQHaD2&pid=Api&P=0&h=180'
    }
  ];

  return (
    <div className="homepage-container">
      <div className="text-section">
        <h4 style={{ marginTop: "40px", marginLeft: "13px" }}><i>CHASE THE NEW FLAVOUR</i></h4>
        <h1 style={{ marginLeft: "13px" }}>THE KEY TO FINE DINING</h1>
        <p style={{ marginLeft: "13px" }}>
          <i>
            "Discover a world of flavors at your fingertips! Our app brings you the finest selection of meals, from classic comfort foods to gourmet delights. Whether you're craving a quick snack or planning a feast, we've got something to satisfy every palate. Explore, indulge, and let your taste buds embark on a culinary adventure!"
          </i>
        </p>
      </div>
      <div className="image-section" style={{width:"50%", margin:"0 auto", height:"90%"}}>
        <Carousel
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          animation="slide"
          style={{ width: "50%", margin: "0 auto", height:"100%"}}
        >
          {items.map((item, i) => (
            <Paper key={i} style={{ height: "150px" }}>
              <Link to={item.link}>
                <img src={item.image} alt='' style={{ height: "100%", width: "100%", objectFit: "cover" }} />
              </Link>
            </Paper>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Homepage;
