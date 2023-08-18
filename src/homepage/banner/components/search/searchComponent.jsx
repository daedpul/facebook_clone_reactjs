
import AvatarLogo from "../../../../resource/fb_logo_avatar.png"

import { useDispatch } from "react-redux"
import { blurSearch, focusSearch } from "../../action/bannerAction"
import { useSelector } from "react-redux/es/hooks/useSelector"
import "./searchfield.css"
import "./logoAnimation.css"

function SearchComponent() {
    // let show = useSelector(state => state.bannerReducer.show) || false
    // var showReturn =()=>{
    //     <img>

    //     </img>
    // }

    return (
        <div style={{
            display: "flex",
            alignContent: "start",
            justifyContent: "start",
            height: "40px",
            // width:"100vw"
        }}>
            <LogoIcon />
            <SearchField />

        </div>
    )
}

function LogoIcon() {
    let show = useSelector(state => state.bannerReducer.show) || true


    const ShowLogo =
        <img className={show.show ? "logologoAvatar" : "logoAvatarHide"}

            src={AvatarLogo} alt="facebookLogo" />

    const ShowReturn = <img className={show.show ? "logologoAvatar" : "logoAvatarHide"}

        src={AvatarLogo} alt="facebookLogo" />

    return (
        <div>
            {ShowLogo}

        </div>)
}



function SearchField() {
    let show = useSelector(state => state.bannerReducer.show) || false

    const dispatch = useDispatch()
    const onFocus = () => dispatch(focusSearch())
    const onBlur = () => dispatch(blurSearch())
    return (
        <div
            className={"searchField"}
            style={{
                alignItems: "center",
                justifyContent: "start",
            }}>
            <input
                style={{
                    width: '260px',
                    display: "flex",
                    border: "none",
                    outline: "none",
                    height: "40px",
                }}
                onFocus={onFocus} onBlur={onBlur} />

        </div>)
}


export default SearchComponent