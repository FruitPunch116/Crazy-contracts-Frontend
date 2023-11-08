function ClientSignUp ({ props }) {
    return (
        <div>
            <h1>Route to Client Sign up container</h1>

            <form >

                <label htmlFor="name">Name</label>
                <input
                type="text"
                onChange={null}
                value={null}
                placeholder="Name"
                />

                <label htmlFor="last-name">Last name</label>
                <input
                type="text"
                onChange={null}
                value={null}
                placeholder="Last name"
                />

                <label htmlFor="email">Email</label>
                <input
                type="email"
                onChange={null}
                value={null}
                placeholder="Email address"
                />

                <label htmlFor="password">Password</label>
                <input
                type="password"
                onChange={null}
                value={null}
                placeholder="Password"
                />

                <label htmlFor="confirm-password">Re-enter Password</label>
                <input
                type="password"
                onChange={null}
                value={null}
                placeholder="Password"
                />

                <input
                type="submit"
                value="Create account"
                />
            </form>
        </div>
    )
}

export default ClientSignUp