const studentHogwarts = function () {
    let privateScore = 0;
    let name = null;

    const changeScoreBy = function (points) {
        privateScore = privateScore + points;
    }

    this.setName = function (newName) {
        name = newName;
    }

    this.rewardStudent = function () {
        changeScoreBy(1);
    }

    this.penalizeStudent = function () {
        changeScoreBy(-1);
    }

    this.getScore = function () {
        return `${name}: ${privateScore}`;
    }
}

const harry = new studentHogwarts();
harry.setName("Harry");
for (let i = 1; i <= 4; i++) {
    harry.rewardStudent();
}
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let j = 1; j <= 3; j++) {
    draco.penalizeStudent();
}
console.log(draco.getScore());
