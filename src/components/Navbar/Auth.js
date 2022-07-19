import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'
function Auth() {

    const user = {
        name: 'Emirhan Keren',
        avatar: 'https://i.scdn.co/image/ab6775700000ee854d55ddadf23058860ed79e2e'
    }
    return(
    <Menu as="nav" className={""}>
        {({open}) =>(
        <>
        <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                    <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5 mr-2"} />
                        <span className='text-sm font-semibold mr-2'>{user.name}</span>
                        <span className={open && 'rotate-180'}>
                            <Icon size={16} name="downdir" />
                        </span>
                        
        </Menu.Button>

        <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded-md translate-y-2"}>
            <Menu.Item>
             {({ active }) => (
                <a href="#" className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                  Hesap <Icon name="link" size={16}/>
                </a>
            )}
            </Menu.Item>
            <Menu.Item>
             {({ active }) => (
                <a href="#" className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                  Profil
                </a>
            )}
            </Menu.Item>
            <Menu.Item>
             {({ active }) => (
                <a href="#" className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                  Oturumu Kapat
                </a>
            )}
            </Menu.Item>
      </Menu.Items>
        </>
        )}
    </Menu>
    )
}
export default Auth