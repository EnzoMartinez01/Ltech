

export const getServices = async() => {
    const url = `https://localhost:8080/api/v1/ltech/services/getservices`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const services = data.map(service => ({
        idService: service.idService,
        nameService: service.nameService,
        descriptionService: service.descriptionService
    }));

    console.log(services);
    return services;
}