import { Header } from "../../components"

export default function Login(props) {

    const renderHeader = () => (
        <Header className=''>
            Hey - this could a header
        </Header>
    )

    return (
        <>
            {/* Heading */}
            {renderHeader()}

            <div>
                <h1 className="text-3xl font-bold underline">Welcome - log in below</h1>
                <button>Login</button>
            </div>
        </>
    )
}