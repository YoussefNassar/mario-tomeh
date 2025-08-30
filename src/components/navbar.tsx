import {
    RectangleStackIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
    {
        name: "LinkedIn",
        icon: RectangleStackIcon,
        href: "https://www.linkedin.com/in/mario-tomeh-5986a2185/"
    },
    {
        name: "Instagram",
        icon: UserCircleIcon,
        href: "https://www.instagram.com/tomehmario/"
    }
];

export function Navbar() {
    return (
        <div className="flex items-center justify-between w-full max-w-7xl h-20 px-4 mx-auto">
            <h4 className=""> Mario Tomeh</h4>
            <ul className="ml-10 items-center gap-x-3 md:gap-8 flex justify-center">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                    <a className="flex items-center gap-1" key={name} href={href}>
                        <Icon className="size-5" />
                        {name}
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default Navbar;
