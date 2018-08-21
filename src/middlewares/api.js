export default store => next => action => {
    const {callAPI, payload, requestType, ...rest} = action

    if (!callAPI) return next(action)

    if (requestType == 'GET') {
        fetch(callAPI, {
            method: requestType,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(response => next({...rest, response}))
    }

    // if (requestType == 'POST') {
    //     fetch(callAPI, {
    //         method: requestType,
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(payload.objContact),
    //     })
    //     .then(res => res.json())
    //     .then(response => next({...rest, payload, response}))
    // }

    if (requestType == 'DELETE') {
        fetch(callAPI, {
            method: requestType,
        })
        .then(next({...rest, payload}))
    }

}