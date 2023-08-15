
import AvatarLogo from "../../../../resource/fb_logo_avatar.png"
import "./searchfield.css"
import { useDispatch } from "react-redux"
import { blurSearch, focusSearch } from "../../bannerAction"
import { UseSelector } from "react-redux/es/hooks/useSelector"


function SearchComponent() {
    return (
        <div style={{
            display: "flex"
        }}>
            <LogoIcon />
            <SearchField />
        </div>
    )
}
function LogoIcon() {
    return (
        <div style={{
            height: '56px',
            display: "flex",
            width: '100vw',
            backgroundColor: 'red',
            alignItems: "center",
            justifyContent: "start",

        }}>
            <img
                style={{
                    height: "40px",
                    width: "40px",
                    margin: "10px"
                }}
                src={AvatarLogo} />
            <SearchField />
        </div>)
}

function SearchField(props) {
    const dispatch = useDispatch()
    const onFocus = () => dispatch(focusSearch())
    const onBlur = () => dispatch(blurSearch())
    return (
        <div
            className="searchField"
            style={{
                height: '40px',
                display: "flex",
                width: '244px',
                alignItems: "center",
                justifyContent: "start",

            }}>
            <input style={{
                border: "none",
                outline: "none",
                height: "100vh",
                width: "100vw"
            }} onFocus={onFocus} onBlur={onBlur}>
            </input>
        </div>)
}


export default SearchComponent