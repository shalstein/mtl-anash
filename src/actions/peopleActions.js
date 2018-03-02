 
    const fetchPeople = (people) => {
        return {type: "RECIEVE_PEOPLE", payload:  [{firstName: 'Roger', lastName: 'Albertson', address: '123 applesause', city: 'Aweseometown', state: 'CO', country: "USA"}, {firstName: 'Tim', lastName: 'Wahsington', address: '443 Whatever St', city: 'Mooterville', state: 'WT', zipCode: '33230', country: 'USA'}, {firstName: "Chani", lastName: 'Steinmetz', address: '897 Cookie Rd', city: 'Picarsaw', state: 'QC', zipCode: 'G4IH9W', country: 'Canada'}]  }
    }

    const selectPerson = (person) => (
        {type: 'SELECTED_PERSON', payload: person}
    )


    export {fetchPeople, selectPerson}

