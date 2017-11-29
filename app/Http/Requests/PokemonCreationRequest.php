<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PokemonCreationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:2',
            'age' => 'required|integer',
            'pounds' => 'required|numeric',
            'description' => 'required|min:6',
            'image' => 'required|image',
            'pokemon_types_ids' => 'required|array',
            'pokemon_types_ids.*' => 'required|distinct|exists:pokemon_types,id'
        ];
    }
}
