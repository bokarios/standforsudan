import React, { Component } from "react"

export class Home extends Component {
	state = {
		trans: 0,
		amount: 0,
		isLoading: true,
		error: null,
	}

	fetchData() {
		fetch(
			"https://standforsudan.ebs-sd.com/StandForSudan/getStandForSudanStatstics"
		)
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					trans: data.numberOfTransaction,
					amount: data.totalAmount,
					isLoading: false,
				})
			)
			.catch((error) => this.setState({ error, isLoading: false }))
	}

	componentDidMount() {
		this.fetchData()
	}

	render() {
		const { isLoading, trans, amount, error } = this.state
		return (
			<div className="container pt-5">
				<div>
					<div className="banner"></div>
				</div>
				{error ? <p>{error.message}</p> : null}
				{!isLoading ? (
					<>
						<div className="col-md-12 pt-5">
							<h1 className="text-center text-light">Developer Sato</h1>
						</div>
						<div className="row pt-5">
							<div
								className="col-md-10 mx-auto text-center pt-5"
								style={{ direction: "rtl" }}
							>
								<h2 className="text-light">عدد التحويلات</h2>
								<h3 className="text-light mb-4">{trans} تحويل</h3>
								<h2 className="text-light">مجموع النقد</h2>
								<h3 className="text-light">{amount} جنيه</h3>
							</div>
						</div>
					</>
				) : (
					<h3>Loading...</h3>
				)}
			</div>
		)
	}
}

export default Home
