import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
 

const AirportPrice = () => {
    return (
        <div className="p-4">
            <SectionTitle subHeading="Cover All Airport" heading="Airport Price"></SectionTitle>
            <div className=" overflow-x-auto bg-gray-950 rounded-xl text-white">
  <table className="table -ml-8">
    <thead>
      <tr className="text-white md:text-xl">
        <th></th>
        <th>Airport Name</th>
        <th>Standard Car</th>
        <th>Excutive Car</th>
        <th>8 Seater</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          
        </th>
        <td>
        Heathrow
        </td>
        <td>
               £95
        </td>
        <td>	£110</td>
        <td>		£180</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          
        </th>
        <td>
        Gatwick
        </td>
        <td>
        £140
        </td>
        <td>	£155</td>
        <td>		£210</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          
        </th>
        <td>
        Luton
        </td>
        <td>
        £115
        </td>
        <td>	£140</td>
        <td>		£230</td>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          
        </th>
        <td>
        Stansted
        </td>
        <td>
        £150
        </td>
        <td>	£170</td>
        <td>		£255</td>
      </tr>

      <tr>
        <th>
          
        </th>
        <td>
        London
        </td>
        <td>
        £170
        </td>
        <td>	£190</td>
        <td>		£280</td>
      </tr>

      <tr>
        <th>
          
        </th>
        <td>
        Birmingham
        </td>
        <td>
        £120
        </td>
        <td>	£145</td>
        <td>		£200</td>
      </tr>

      <tr>
        <th>
          
        </th>
        <td>
        Southampton
        </td>
        <td>
        £145
        </td>
        <td>	£165</td>
        <td>		£230</td>
      </tr>


      <tr>
        <th>
          
        </th>
        <td>
        Bristol
        </td>
        <td>
        £160
        </td>
        <td>	£190</td>
        <td>		£210</td>
      </tr>


      <tr>
        <th>
          
        </th>
        <td>
        Private
        </td>
        <td>
        £130
        </td>
        <td>	£140</td>
        <td>		£220</td>
      </tr>


    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AirportPrice;