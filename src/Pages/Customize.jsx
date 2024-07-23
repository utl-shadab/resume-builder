import React, { useState, useRef } from 'react';
import FirstTemp from '../components/Resume/FirstTemp';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import SideForm from '../components/Resume/SideForm';
import ProfilePic from '../images/profile.png';
const Customize = () => {
  const [profilePic, setProfilePic] = useState(ProfilePic);
  const fileInputRef = useRef(null);
  const [firstName, setFirstName] = useState('Stephen');
  const [lastName, setLastName] = useState('Colbert');
  const [designation, setDesignation] = useState('Designer');
  const [email, setEmail] = useState('stephen@colbert.com');
  const [phoneNumber, setPhoneNumber] = useState('+324 4445678');
  const [address, setAddress] = useState('1234567890');
  const [pincode, setPincode] = useState('123456');
  const [city, setCity] = useState('New York');
  const [portfolio, setPortfolio] = useState('https://www.google.com');

  const handleProfilePicChange = (newPic) => {
    setProfilePic(URL.createObjectURL(newPic));
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    handleProfilePicChange(e.target.files[0]);
  };
  return (
    <div>
      <Navbar />
      <section className="customize">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <SideForm
                handleButtonClick={handleButtonClick}
                fileInputRef={fileInputRef}
                handleFileChange={handleFileChange}
                setFirstName={setFirstName} setLastName={setLastName}
                setDesignation={setDesignation}
                setEmail={setEmail}
                setPhoneNumber={setPhoneNumber}
                setAddress={setAddress}
                setPincode={setPincode}
                setCity={setCity}
                setPortfolio={setPortfolio}
              />
            </div>
            <div className="col-lg-7">
              <FirstTemp profilePic={profilePic} firstName={firstName} lastName={lastName} designation={designation} email={email} phoneNumber={phoneNumber} address={address} pincode={pincode} city={city} portfolio={portfolio} />
            </div>
          </div>
        </div>
      </section>
      <Footer isGeneral={true} />
    </div>
  )
}

export default Customize;