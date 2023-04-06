import ftProduct from '../image/lipStickc.svg';


const data = [[ftProduct , "Brush" , "2999"],[ftProduct , "LipStick" , "99"]];

export default function homePage(){
    return(
        <div className="homepage page">

        <div className="categories"> 
            <div className="cate1">
                <img src="brush.png" alt="brush" />
                <p>Brush</p>
            </div>
            <div className="cate1">
                <img src="brush.png" alt="brush" />
                <p>Brsh</p>
            </div>
            <div className="cate1">
                <img src="brush.png" alt="brush" />
                <p>Brsh</p>
            </div>
            <div className="cate1">
                <img src="brush.png" alt="brush" />
                <p>Brsh</p>
            </div>
            <div className="cate1">
                <img src="brush.png" alt="brush" />
                <p>Brsh</p>
            </div>
        </div>

        <div className="newProducts">
         {data.map((datas)=>{
            return(
                <div className="productBox">
                <object type="image/svg+xml" aria-label="pcImage" data={data[0][0]} ></object>
                <p>{data[0][1]}</p>
                <p>{data[0][2]}</p>
                <button>buy now</button>
            </div>
            );
         })}
                  
        </div>
        <div className="products"> </div>
        
        </div>
    )
}