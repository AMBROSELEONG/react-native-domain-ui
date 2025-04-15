import { DomainLoading } from "react-native-domain-ui";
import { useState } from "react"

const DomainLoadingExample = () => {
    const [loading] = useState(true);

    return (
        <DomainLoading loading={loading} />
    )
}

export default DomainLoadingExample;