import { useState } from "react";
import "./styles.css";

const Presale = () => {
    const [usdtAmount, setUsdtAmount] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const rate = 1000;
    const minBuy = 10;
    const maxBuy = 10000;

    const handleSwap = () => {
        const amount = parseFloat(usdtAmount);
        if (isNaN(amount) || amount < minBuy || amount > maxBuy) {
            setErrorMessage(`Amount must be between ${minBuy} and ${maxBuy} USDT`);
            return;
        }
        setErrorMessage("");
        alert(`You will receive ${amount * rate} $SKIBIDI`);
    };

    return (
        <div className="presale-container">
            <nav className="navbar">
                <div className="logo">Skibidi</div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/presale">Presale</a></li>
                    <li><a href="/whitepaper.pdf">Whitepaper</a></li>
                    <li><button id="connectWallet">Connect Wallet</button></li>
                </ul>
            </nav>
            <h1>Skibidi Presale</h1>
            <p>Swap your USDT for $SKIBIDI tokens now!</p>
            <div className="swap-box">
                <label htmlFor="usdtAmount">Enter USDT Amount:</label>
                <input 
                    type="number" 
                    id="usdtAmount" 
                    value={usdtAmount} 
                    onChange={(e) => setUsdtAmount(e.target.value)}
                    placeholder="Min: 10, Max: 10,000" 
                />
                <p>Rate: 1 USDT = 1000 $SKIBIDI</p>
                <p>Minimum Buy: {minBuy} USDT | Maximum Buy: {maxBuy} USDT</p>
                <button onClick={handleSwap}>Buy</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Presale;
