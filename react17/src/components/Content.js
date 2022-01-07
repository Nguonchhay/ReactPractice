import React from "react";
import { Button } from "reactstrap";

import Translation from "../locales/Translate";

const Content = () => {
    return (
        <div>
        <Button
            color="primary"
        >
            <Translation langKey="click_me"/>
        </Button>
        </div>
    )
}

export default Content;