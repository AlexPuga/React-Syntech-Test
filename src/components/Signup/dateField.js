import React, {Component} from 'react'

class dateField extends Component {

    render() {
        const {birth_day, birth_month, birth_year} = this.props

        return (
            <div className="fields">
                {this.setLabel()}
                <div className="fields-group">
                    <div className="fields-group__item">
                        <input className="fields-group__input" {...birth_day.input} size="2" type="number" placeholder="DD"/>
                    </div>
                    <div className="fields-group__item">
                        <input className="fields-group__input" {...birth_month.input} size="2" type="number" placeholder="MM"/>
                    </div>
                    <div className="fields-group__item">
                        <input className="fields-group__input" {...birth_year.input} size="2" type="number" placeholder="YY"/>
                    </div>
                </div>
            </div>
        )
    }

    setLabel() {
        const {birth_day, birth_month, birth_year, label} = this.props
        if (birth_day.meta.touched && birth_day.meta.error) return <span className="field__error fields__error">{birth_day.meta.error}</span>
        if (birth_month.meta.touched && birth_month.meta.error) return <span className="field__error fields__error">{birth_month.meta.error}</span>
        if (birth_year.meta.touched && birth_year.meta.error) return <span className="field__error fields__error">{birth_year.meta.error}</span>
        return <label className="field__label fields__label">{label}</label>
    }
}

// const dateField = (fields) => (
//
//     <div className="fields">
//
//         {() => {
//             if (fields['birth_day'].meta.touched && fields['birth_day'].meta.error) return <span className="field__error fields__error">{fields['birth_day'].meta.error}</span>
//             if (fields['birth_month'].meta.touched && fields['birth_month'].meta.error) return <span className="field__error fields__error">{fields['birth_month'].meta.error}</span>
//             if (fields['birth_year'].meta.touched && fields['birth_year'].meta.error) return <span className="field__error fields__error">{fields['birth_year'].meta.error}</span>
//             else return <label className="field__label fields__label">{fields.label}</label>
//         }}
//
//         {/*{fields['names'].map((name, index) => {*/}
//             {/*fields[name].meta.touched && fields[name].meta.error*/}
//                 {/*? labelText.text = <span key={fields[name].input.name} className="field__error fields__error">{fields[name].meta.error}</span>*/}
//                 {/*: labelText.text = <label key={fields[name].input.name} className="field__label fields__label">{fields.label}</label>*/}
//         {/*})}*/}
//
//
//
//         <div className="fields-group">
//             <div className="fields-group__item">
//                 <input className="fields-group__input" {...fields.birth_day.input} size="2" type="number" placeholder="DD"/>
//             </div>
//             <div className="fields-group__item">
//                 <input className="fields-group__input" {...fields.birth_month.input} size="2" type="number" placeholder="MM"/>
//             </div>
//             <div className="fields-group__item">
//                 <input className="fields-group__input" {...fields.birth_year.input} size="2" type="number" placeholder="YY"/>
//             </div>
//         </div>
//     </div>
// )

export default dateField