const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" width="800px">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="../../src/assets/logo1.png" alt="" width={"90"} height={"30"} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://drive.google.com/open?id=1VGU7t5dfYa33Uk5DmpssvxcuRx4ROGga&usp=drive_fs">
                                <img src="../../src/assets/drive.png" alt="" width={"30"} className="me-2" />
                                Drive Operaciones
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://database.administrador.vip/_/" target="_blank">
                                Database
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://pocketbase.io/docs/" target="_blank">
                                Documentación DB
                            </a>
                        </li>
                        <li>
                            <a className="nav-link " href="https://itconsultants.cl" target="_blank">
                                Odoo ITC
                            </a>
                        </li>
                        <li>
                            <a className="nav-link disabled">
                                Disabled
                            </a>
                        </li>                        <li>
                            <a className="nav-link disabled">
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;