import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
//import client from "../api";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import countries from '../services/countries.json'
import { UserIpInfo } from "../services/GetLocation";

const userSignup = () => {
    const [error, setError] = useState(null);
    const [message, displayMessage] = useState(null);
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [userBirthday, setBirthday] = useState('');
    const [first_cn, setFCNumber] = useState('');
    const [password, setPassword] = useState('');
    const [countryCode, setCountryCode] = useState(null);
    const [countryName, setCountryName] = useState(null);
    const [ipAddress, setIpAddress] = useState(null);
    const [city, setCity] = useState(null);

    const handleTUSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await client.post('users/tenants/signup/', {
                username:username,
                email:email,
                first_name : firstName,
                last_name : lastName,
                second_contact_number: second_cn,
                city : city,
                country : countryName,
                password : password

            }, { withCredentials: true,
                headers: {
                'Content-Type': 'multipart/form-data',
            }, });
            
            console.log('Signup successful', response.data);
            if(response.status === 201 ){
                displayMessage("Signup Successful!")
                navigate('/login')
            }

            useEffect(() => {
              const token = authService.getToken();
              setToken(token);
            }, []);
            setError(null);
            
        } catch (error) {
            // Handle error
            console.error('Signup failed',error);
            setError('Invalid Form!\nCheck Data and Retry');
            displayMessage(null)
        }
    };

    
    useEffect(() => {
        const fetchLocation = async () => {
        const location = await UserIpInfo();
        if (location) {
            setIpAddress(location.ip_address);
            setCity(location.city);
            setCountryCode(location.country);
    
            const matched = countries.find(c => c.code === location.country);
            if (matched) {
            setCountryName(matched.name);
            } else {
            setCountryName("Unknown");
            }
        }
        };
    
        fetchLocation();
    }, []);

    return (
        <>
            <section className="bg-gdbg">
            <div className="lg:min-h-screen flex fle-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full">
                    <div>
                    <h1 className="lg:text-5xl text-4xl font-bold text-gdtext !leading-tight">
                        Seamless Login for Exclusive Access
                    </h1>
                    <p className="text-[15px] mt-6 text-gdtext leading-relaxed text-3xl">Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.</p>
                    <p className="text-[15px] mt-6 lg:mt-12 text-gdtext">Don't have an account <Link to='/signup' className="text-gdaccent font-medium hover:underline hover:text-gdsecondary ml-1">Register here</Link></p>
                    </div>

                    <form className="max-w-md lg:ml-auto w-full">
                    <h2 className="text-gdtext text-3xl font-semibold mb-8">
                        Sign up
                    </h2>

                    <div className="space-y-3">

                        <div>
                            <label className='text-sm text-gdtext font-medium mb-2 block'>First Name</label>
                            <input name="first name" type='text' className="bg-slate-100 w-full text-sm text-gdbg px-4 py-3 rounded-md outline-0 font-semibold border border-gdtext focus:border-gdsecondary focus:bg-gdtext" placeholder="Enter your first name" />
                        </div>

                        <div>
                            <label className='text-sm text-gdtext font-medium mb-2 block'>Last Name</label>
                            <input name="last name" type="text" required className="bg-slate-100 w-full text-sm text-gdbg px-4 py-3 rounded-md outline-0 font-semibold border border-gdtext focus:border-gdsecondary focus:bg-gdtext" placeholder="Enter your last name" />
                        </div>

                        <div>
                        <label className='text-sm text-gdtext font-medium mb-2 block'>Email</label>
                        <input name="email" type="email" required className="bg-slate-100 w-full  text-sm text-gdbg px-4 py-3 rounded-md outline-0 font-semibold border border-gray-200 focus:border-gdsecondary focus:bg-gdtext" placeholder="Enter your Email" />
                        </div>

                        <div>
                            <label className='text-sm text-gdtext font-medium mb-2 block'>Mobile No.</label>
                            <input name="number" type="number" className="bg-slate-100 w-full text-sm text-gdbg px-4 py-3 rounded-md outline-0 font-semibold border border-gdtext focus:border-gdsecondary focus:bg-gdtext" placeholder="Enter your mobile number" />
                        </div>

                        <div>
                            <label className='text-sm text-gdtext font-medium mb-2 block'>Country</label>
                            <input name="text" type="number" className="bg-slate-100 w-full text-sm text-black px-4 py-3 rounded-md outline-0 font-semibold border border-gdtext focus:border-gdsecondary focus:bg-gdtext" readOnly placeholder={countryName} />
                            
                        </div>

                        <div>
                        <label className='text-sm text-gdtext font-medium mb-2 block'>Password</label>
                        <input name="password" type="password" className="bg-slate-100 w-full text-sm text-gdbg px-4 py-3 rounded-md outline-0 font-semibold border border-gdtext focus:border-gdsecondary focus:bg-gdtext" placeholder="Enter Password" />
                        </div>
                       
                    </div>

                    <div className="!mt-12">
                        <button type="button" className="w-full shadow-xl py-2.5 px-4 text-[15px] font-bold rounded-md text-gdbg bg-gdprimary hover:bg-gdaccent focus:outline-none cursor-pointer">
                        Join now
                        </button>
                    </div>

                    
                    </form>
                </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default userSignup;