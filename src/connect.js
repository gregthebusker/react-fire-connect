let React = require('react');
let ReactFire = require('reactfire');

module.export = {
    connect: (mapPropsToRefs) => {
        return (WrappedComponent) => {
            return React.createClass({
                render() {
                    return (
                        <WrappedComponent {...this.props} />
                    );
                },
            });
        };
    }
};