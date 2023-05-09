import { useNavigate, useLocation, Link } from 'react-router-dom';
import RoutesStore from '../../modules/_shared/constants/RoutesStore.enum';
import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { iconApi } from '../../modules/_shared/services/iconApi';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const [registrationPage, setRegistrationPage] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getPathName = () => {
    if (pathname === RoutesStore.HOME) {
      setRegistrationPage(true);
    } else {
      setRegistrationPage(false);
    }
  };

  useEffect(() => {
    getPathName();
  }, [pathname]);

  return (
    <>
      <div
        className={`flex flex-col w-full ${
          registrationPage ? 'max-h-screen h-auto lg:bg-default' : 'h-screen'
        } `}
      >
        <div className="text-white w-full md:w-60 lg:w-80 md:h-full bg-primary shadow-lg md:fixed z-50 md:z-0">
          <div className="flex flex-row md:flex-col items-center md:items-start">
            <div className="md:flex flex-col hidden md:w-full mt-14 gap-7">
              <div className="flex justify-center">
                <p>Minha loja</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="capitalize font-medium"></span>
              </div>
              <div className="flex flex-col mr-10">
                <Link to={RoutesStore.HOME}>
                  <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-primary hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                    <img src={iconApi + 'home.svg'} alt="home" className="w-6 h-6 text-white" />{' '}
                    Home
                  </div>
                </Link>

                <Link to={RoutesStore.PRODUTO}>
                  <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-primary hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                    <img src={iconApi + 'bag.svg'} alt="bag" className="w-6 h-6 text-white" />{' '}
                    Produto
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:ml-80 md:ml-60 overflow-y-auto">
          <Header />
          <div className="flex flex-col bg-white h-screen">{children}</div>
        </div>
      </div>
    </>
  );
};
