function SampleCtrl($scope) {

    $scope.people = [{
        id: 1,
        last: "Clooney",
        first: "George"
    }, {
        id: 2,
        last: "James",
        first: "LeBron"
    }, {
        id: 3,
        last: "Curie",
        first: "Marie"
    }];

    $scope.addPerson = function() {

        var newId = $scope.people.length;
        newId++;

        $scope.people.push({
            id: newId,
            last: $scope.addLast,
            first: $scope.addFirst
        });
    };
};