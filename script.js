const ctx = document.getElementById('budgetChart').getContext('2d');
const budgetData = {
    labels: ['Education', 'Health', 'Defense', 'Others'],
    datasets: [{
        data: [3000, 2000, 1500, 500],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
    }]
};

const config = {
    type: 'pie',
    data: budgetData,
    options: {
        responsive: true,
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                const label = budgetData.labels[index];
                alert(`You clicked on ${label}`);
                // ここで詳細ページに遷移する処理を追加できます
            }
        }
    }
};

new Chart(ctx, config);
