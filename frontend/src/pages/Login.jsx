import { useState , useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { authService } from "../services/authService";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(false)


    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)

        try{
            const userData = { username,password};
            const response = await authService.loginUser(userData);

            //console.log(response?.data)
            if(response.status === 200 ){
                setLoading(false)
                authService.setToken(response?.data?.access);
                navigate('/home')
            }
            setError(null);
        
        } catch (error) {
            setLoading(false)
            console.error('Login failed', error.response);
            setError('Invalid username or password!');
        }
    };
    return(
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
                        Sign in
                    </h2>

                    <div className="space-y-6">
                        <div>
                        <label className='text-sm text-gdtext font-medium mb-2 block'>Email</label>
                        <input name="email" type="email" required className="bg-slate-100 w-full  text-sm text-gdbg px-4 py-3 rounded-md outline-0 font-semibold border border-gray-200 focus:border-gdsecondary focus:bg-gdtext" placeholder="Enter Email" />
                        </div>
                        <div>
                        <label className='text-sm text-gdtext font-medium mb-2 block'>Password</label>
                        <input name="password" type="password" required className="bg-slate-100 w-full text-sm text-gdbg px-4 py-3 rounded-md outline-0 font-semibold border border-gdtext focus:border-gdsecondary focus:bg-gdtext" placeholder="Enter Password" />
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 accent-gdaccent focus:ring-gdprimary border-slate-300 rounded" />
                            <label for="remember-me" className="ml-3 block font-semibold text-sm text-gdtext">
                            Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="" className="text-gdaccent hover:text-gdsecondary font-medium">
                            Forgot your password?
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="button" className="w-full shadow-xl py-2.5 px-4 text-[15px] font-bold rounded-md text-gdbg bg-gdprimary hover:bg-gdaccent focus:outline-none cursor-pointer">
                        Log in
                        </button>
                    </div>

                    
                    </form>
                </div>
                </div>
            </section>
        </>
)};
export default Login;