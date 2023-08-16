
import AvatarLogo from "../../../../resource/fb_logo_avatar.png"
import "./searchfield.css"
import { useDispatch } from "react-redux"
import { blurSearch, focusSearch } from "../../action/bannerAction"
import { useSelector } from "react-redux/es/hooks/useSelector"
import "./logoAnimation.css"

function SearchComponent() {
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
    const show = useSelector(state => state.bannerReducer.show)
    return (
        <div
            className={show ? "" : "searchFieldHide"}
            style={{
                height: '56px',
                display: "flex",
                backgroundColor: 'red',
                alignItems: "start",
                justifyContent: "start",
            }}>
            <img
                style={{
                    height: "40px",
                    width: "40px",
                    margin: "10px"
                }}
                src={AvatarLogo} alt="logo"/>
        </div>)
}

function SearchField() {
    const show = useSelector(state => state.bannerReducer.show)

    const dispatch = useDispatch()
    const onFocus = () => dispatch(focusSearch())
    const onBlur = () => dispatch(blurSearch())
    // console.log(show ? "searchFieldShow" : "searchFieldHide")
    console.log(show)
    return (
        <div

            style={{
                height: '56px',
                display: "flex",
                width: '244px',
                alignItems: "center",
                justifyContent: "start",
            }}>
            <input
                className={show ? "searchFieldShow" : "searchFieldHide"}
                style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "green",
                    height: "40px",
                }} onFocus={onFocus} onBlur={onBlur} />

        </div>)
}


export default SearchComponent