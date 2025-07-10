from flask import request, jsonify 
from config import app, db
from models import Contact

# GET
@app.route('/contacts', methods=['GET'])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({
        'contacts': json_contacts
    })

@app.route('create_context', methods=['POST'])
def create_contact():
    first_name = request.json.get('firstName')
    last_name = request.json.get('lastName')
    email = request.json.get('email')

    if not first_name or not last_name or not email:
        return (
            jsonify({
            'message': 'You must include a first name, last name, or email.'}),
            400,
        )
    new_contact = Contact(first_name, last_name, email)
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return (
            jsonify({
            'message': str(e)}),
            400,
        )
    return jsonify({'message': 'New User Created!'}), 201

if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True)