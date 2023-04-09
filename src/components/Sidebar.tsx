import briefcase_icon from '../assets/icons/briefcase_icon.svg'
import dashboard_icon from '../assets/icons/dashboard_icon.svg'
import users_icon from '../assets/icons/users_icon.svg'
import guarantors_icon from '../assets/icons/guarantors_icon.svg'
import loan_icon from '../assets/icons/loan_icon.svg'
import handshake_icon from '../assets/icons/handshake_icon.svg'
import piggy_icon from '../assets/icons/piggy_icon.svg'
import loan_request_icon from '../assets/icons/loan_request_icon.svg'
import whitelist_icon from '../assets/icons/whitelist_icon.svg'
import karma_icon from '../assets/icons/karma_icon.svg'
import savings_products_icon from '../assets/icons/savings_products_icon.svg'
import fees_charges_icon from '../assets/icons/fees_charges_icon.svg'
import transactions_icon from '../assets/icons/transactions_icon.svg'
import services_icon from '../assets/icons/services_icon.svg'
import service_accounts_icon from '../assets/icons/service_accounts_icon.svg'
import settlements_icon from '../assets/icons/settlements_icon.svg'
import reports_icon from '../assets/icons/reports_icon.svg'
import preferences_icon from '../assets/icons/preferences_icon.svg'
import percentage_icon from '../assets/icons/percentage_icon.svg'
import audit_icon from '../assets/icons/audit_icon.svg'
import system_messages_icon from '../assets/icons/system_messages_icon.svg'
import logout_icon from '../assets/icons/logout_icon.svg'

function Sidebar(){

    const logout = () => {
        window.location.href = '#/login';
    }

    return (
        <section className='sidebar text-dark-blue' id='sidebar'>
          
            <div className="top flex items-center py-5 gap-2 cursor-pointer">
                <img src={briefcase_icon} alt="briefcase icon" />
                <span className="text-xs font-bold">Switch Organization</span>
                <i className="bx bx-chevron-down"></i>
            </div>

            <div className="flex menu__item items-center py-4 gap-2">
                <img src={dashboard_icon} alt="dashboard icon" />
                <span className="text-xs">Dashboard</span>
            </div>

            <div className="group__menu flex flex-col mt-2">
                <h5 className="py-3 font-bold text-xs title">CUSTOMERS</h5>
                
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={users_icon} alt="dashboard icon" />
                    <span className="text-xs">Users</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={guarantors_icon} alt="dashboard icon" />
                    <span className="text-xs">Guarantors</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={loan_icon} alt="dashboard icon" />
                    <span className="text-xs">Loans</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={handshake_icon} alt="dashboard icon" />
                    <span className="text-xs">Decision Models</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={piggy_icon} alt="dashboard icon" />
                    <span className="text-xs">Savings</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={loan_request_icon} alt="dashboard icon" />
                    <span className="text-xs">Loan Request</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={whitelist_icon} alt="dashboard icon" />
                    <span className="text-xs">Whitelist</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={karma_icon} alt="dashboard icon" />
                    <span className="text-xs">Karma</span>
                </div>
            </div>

            <div className="group__menu flex flex-col mt-2">
                <h5 className="py-3 font-bold text-xs title">BUSINESSES</h5>
                
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={briefcase_icon} alt="dashboard icon" />
                    <span className="text-xs">Organization</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={loan_request_icon} alt="dashboard icon" />
                    <span className="text-xs">Loan Products</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={savings_products_icon} alt="dashboard icon" />
                    <span className="text-xs">Savings Products</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={fees_charges_icon} alt="dashboard icon" />
                    <span className="text-xs">Fees and Charges</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={transactions_icon} alt="dashboard icon" />
                    <span className="text-xs">Transactions</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={services_icon} alt="dashboard icon" />
                    <span className="text-xs">Services</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={service_accounts_icon} alt="dashboard icon" />
                    <span className="text-xs">Service Account</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={settlements_icon} alt="dashboard icon" />
                    <span className="text-xs">Settlements</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={reports_icon} alt="dashboard icon" />
                    <span className="text-xs">Reports</span>
                </div>
            </div>

            <div className="group__menu flex flex-col mt-2 pb-7">
                <h5 className="py-3 font-bold text-xs title">SETTINGS</h5>
                
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={preferences_icon} alt="dashboard icon" />
                    <span className="text-xs">Preferences</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={percentage_icon} alt="dashboard icon" />
                    <span className="text-xs">Fees and Pricing</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={audit_icon} alt="dashboard icon" />
                    <span className="text-xs">Audit Logs</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <img src={system_messages_icon} alt="system messages icon" />
                    <span className="text-xs">Sytem Messages</span>
                </div>
            </div>

            <div className="logout__box border-t border-gray-200 pt-3">
                <div onClick={logout}  
                className="flex menu__item items-center py-3 gap-2">
                    <img src={logout_icon} alt="logout icon" />
                    <span className="text-xs">Logout</span>
                </div>
                <div className="flex menu__item items-center py-3 gap-2">
                    <p className="my-1 text-xs">
                    v1.2.0
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Sidebar