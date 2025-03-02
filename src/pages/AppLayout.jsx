import AppNav from "../components/AppNav/AppNav"
import Sidebar from "../components/Sidebar/Sidebar"
import Map from "../components/Map/Map"
import styles from './AppLayout.module.css'

function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
        </div>
    )
}

export default AppLayout
