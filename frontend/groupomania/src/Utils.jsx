const timeStamps ={

    convertDateForHuman(createdAt) {
       let converted = new Date(createdAt);
       return converted.toLocaleString();
     }
}

export default timeStamps;