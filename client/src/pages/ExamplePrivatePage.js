// Calling private API endpoints using auth token
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import privateApi from '../api/PrivateAPI';

function CodeBlock({ children }) {
    return (
        <pre>
            {children}
        </pre>
    );
}

function ExamplePrivatePage() {
    const { user, token } = useAuth();
    const [privateData, setPrivateData] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const result = await privateApi.privateApiExample(token);
            console.log('=== debug: private APi response: ' + JSON.stringify(result));
            if (result.status === 200) {
                setPrivateData(JSON.stringify(result?.date));
            } else {
                setPrivateData('API error');
            }
        };
        getData(); 
    }, [user, token]);

    return (
        <div>
            <h2>Example Private Page</h2>
            <p>This is an example private page. It should get private data from AAPI endpoints using auth token , if we are logged in.</p>
            <p>Actions are available in the API call inside the JS console and network tab.</p>

            <div>
                <h2>Private API data:</h2>
                <CodeBlock>data result: {privateData || '{empty}'}</CodeBlock>
            </div>
        </div>
    );
}

export default ExamplePrivatePage;