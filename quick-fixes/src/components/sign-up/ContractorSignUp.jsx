function ContractorSignUp ({ props }) {



    return (
        <div>

            <h1>Route to contractor sign up container</h1>

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
                type="text"
                onChange={null}
                value={null}
                placeholder="Email"
                />

                <label htmlFor="company-name">Company name</label>
                <input
                type="text"
                onChange={null}
                value={null}
                placeholder="Company name"
                />

                <label htmlFor="experience">Experience time</label>
                <input
                type="number"
                onChange={null}
                value={null}
                placeholder="Experience"
                />

                <label htmlFor="age">Age</label>
                <input
                type="number"
                onChange={null}
                value={null}
                placeholder="Age"
                />

                <label htmlFor="contractor">Independent?</label>
                <input
                type="checkbox"
                />
                
                <label htmlFor="principal-address">Address 1</label>
                <input
                type="text"
                onChange={null}
                value={null}
                placeholder="Address"
                />

                <label htmlFor="secondary-address">Address 2</label>
                <input
                type="text"
                onChange={null}
                value={null}
                placeholder="Secondary address"
                />
                
                <label htmlFor="zip-code">Zip code</label>
                <input
                type="text"
                onChange={null}
                value={null}
                placeholder="Zip code"
                />

                <label htmlFor="state">State</label>
                <input
                type="text"
                onChange={null}
                value={null}
                placeholder="State"
                />

                <label htmlFor="city">City</label>
                <input
                type="text"
                onChange={null}
                value={null}
                placeholder="City"
                />

                <label htmlFor="password">Password</label>
                <input
                type="password"
                onChange={null}
                value={null}
                placeholder="Password"
                />

                <label htmlFor="confirm-password">Re-enter password</label>
                <input
                type="password"
                onChange={null}
                value={null}
                placeholder="Confirm password"
                />

                <input
                type="submit"
                value="Create account"
                />

            </form>
        </div>
    )
}

export default ContractorSignUp