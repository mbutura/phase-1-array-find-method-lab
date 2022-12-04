function superbowlWin(records) {
    let winRec = records.find((elem => elem.result === "W"));
    return (winRec) ? winRec.year : undefined;
  }