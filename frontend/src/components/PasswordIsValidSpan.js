import React, {useState} from 'react';

const PasswordIsValid = () => {
    const [password, setPassword] = useState('');

    const [isValidMinuscule, setIsValidMinuscule] = useState(false);
    const [isValidMajuscule, setIsValidMajuscule] = useState(false);
    const [isValidNbrCaract, setIsValidNbrCaract] = useState(false);


    const handleChange = (e) => {
        const newPassword = e.target.value;

        const regexMin = /[a-z]/;
        const regexMaj = /[A-Z]/;
        const regexNbrCar = /^\d{8,20}$/;

        setIsValidMinuscule(regexMin.test(newPassword));
        setIsValidMajuscule(regexMaj.test(newPassword));
        setIsValidNbrCaract(regexNbrCar.test(newPassword));

        if (setIsValidMajuscule && setIsValidMajuscule && setIsValidNbrCaract()) {
            setPassword(newPassword);

        }
    };

    return (
        <div>
            <input
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter password"
            />
            <span>
        {isValidMinuscule ? 'Votre mot de passe contient une minuscule' : ''}
      </span>
            <span>
        {isValidMajuscule ? 'Votre mot de passe contient une majuscule' : ''}
      </span>
            <span>
        {isValidNbrCaract ? 'Votre mot de passe contient au moins 8 caractères' : ''}
      </span>
        </div>
    );
};

export default PasswordIsValid;