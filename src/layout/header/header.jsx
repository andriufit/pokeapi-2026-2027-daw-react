import "./header.css"


export default function Header(){

    return (

        <>
            <header>
                <div class="header-container">
                    <div>
                        <a href="./"><img src="/."/></a>
                    </div>

                    <div class="menu-container">
                        <ul>
                            <li>
                                <a href="#">inicio</a>
                            </li>
                            <li>
                                <a href="#">Todos</a>
                            </li>
                            <li>
                                <a href="#">Otros</a>
                            </li>
                        </ul>
                    </div>


                </div>
            </header>
        </>
    )

}